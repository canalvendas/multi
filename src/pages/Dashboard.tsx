import { useEffect, useState } from "react";
import { User, CalendarDays, Plus, ChevronRight, ClipboardList, MessageSquare, Users } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MadeWithDyad } from "@/components/made-with-dyad";
import { useAuth } from "@/context/AuthContext";
import { supabase } from "@/integrations/supabase/client";
import { Appointment, Patient } from "@/types";
import { format } from "date-fns";

const Dashboard = () => {
  const { user } = useAuth();
  const [nextAppointments, setNextAppointments] = useState<Appointment[]>([]);
  const [patientCount, setPatientCount] = useState(0);
  const [todayAppointmentCount, setTodayAppointmentCount] = useState(0);

  useEffect(() => {
    if (!user) return;

    const today = format(new Date(), "yyyy-MM-dd");

    const fetchDashboardData = async () => {
      // Fetch appointments for today
      const { data: appointmentsData, error: appointmentsError } = await supabase
        .from("appointments")
        .select("*, patients(name, avatar_url)")
        .eq("user_id", user.id)
        .eq("date", today)
        .order("time", { ascending: true });

      if (appointmentsError) console.error("Error fetching appointments:", appointmentsError);
      else {
        setNextAppointments(appointmentsData as any);
        setTodayAppointmentCount(appointmentsData.length);
      }

      // Fetch total patient count
      const { count, error: patientsError } = await supabase
        .from("patients")
        .select("*", { count: "exact", head: true })
        .eq("user_id", user.id);

      if (patientsError) console.error("Error fetching patient count:", patientsError);
      else setPatientCount(count || 0);
    };

    fetchDashboardData();
  }, [user]);

  return (
    <div className="p-4 md:p-6 space-y-8">
      <h1 className="text-3xl font-bold">Dashboard</h1>

      {/* Metric Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <Card className="bg-card shadow-sm hover:shadow-lg transition-shadow duration-300">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pacientes Ativos</CardTitle>
            <User className="h-5 w-5 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-bold">{patientCount}</div>
            <p className="text-xs text-muted-foreground">Total de pacientes cadastrados</p>
          </CardContent>
        </Card>
        <Card className="bg-card shadow-sm hover:shadow-lg transition-shadow duration-300">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Atendimentos Hoje</CardTitle>
            <CalendarDays className="h-5 w-5 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-bold">{todayAppointmentCount}</div>
            <p className="text-xs text-muted-foreground">Agendados para hoje</p>
          </CardContent>
        </Card>
      </div>

      {/* Próximos Atendimentos */}
      <section>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold">Próximos Atendimentos</h2>
          <Button variant="link" className="text-primary p-0 h-auto">
            Ver todos
          </Button>
        </div>
        <div className="space-y-3">
          {nextAppointments.length > 0 ? (
            nextAppointments.map((appointment) => (
              <Card key={appointment.id} className="bg-card shadow-sm hover:shadow-md transition-shadow duration-200 cursor-pointer">
                <CardContent className="p-4 flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={appointment.patients.avatar_url || "/placeholder.svg"} alt={appointment.patients.name} />
                      <AvatarFallback>{appointment.patients.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold text-lg">{appointment.patients.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {appointment.specialty} • {appointment.time}
                      </p>
                    </div>
                  </div>
                  <ChevronRight className="h-5 w-5 text-muted-foreground" />
                </CardContent>
              </Card>
            ))
          ) : (
            <p className="text-muted-foreground text-center py-4">Nenhum atendimento agendado para hoje.</p>
          )}
        </div>
      </section>

      {/* Acesso Rápido */}
      <section className="relative">
        <h2 className="text-xl font-semibold mb-4">Acesso Rápido</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Button variant="outline" className="h-28 flex flex-col items-center justify-center text-md font-medium text-foreground hover:bg-accent transition-colors duration-200 shadow-sm">
            <Users className="h-7 w-7 mb-2 text-primary" />
            Pacientes
          </Button>
          <Button variant="outline" className="h-28 flex flex-col items-center justify-center text-md font-medium text-foreground hover:bg-accent transition-colors duration-200 shadow-sm">
            <CalendarDays className="h-7 w-7 mb-2 text-primary" />
            Agenda
          </Button>
          <Button variant="outline" className="h-28 flex flex-col items-center justify-center text-md font-medium text-foreground hover:bg-accent transition-colors duration-200 shadow-sm">
            <ClipboardList className="h-7 w-7 mb-2 text-primary" />
            Relatórios
          </Button>
          <Button variant="outline" className="h-28 flex flex-col items-center justify-center text-md font-medium text-foreground hover:bg-accent transition-colors duration-200 shadow-sm">
            <MessageSquare className="h-7 w-7 mb-2 text-primary" />
            Mensagens
          </Button>
        </div>
        <Button
          size="icon"
          className="absolute -bottom-2 -right-2 h-16 w-16 rounded-full shadow-lg bg-primary hover:bg-primary/90"
        >
          <Plus className="h-7 w-7" />
        </Button>
      </section>
      <MadeWithDyad />
    </div>
  );
};

export default Dashboard;