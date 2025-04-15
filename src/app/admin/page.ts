import { createClient } from "@/supabase/server";
import { redirect } from "next/navigation";

const Admin = async () => {
  const supabase = createClient();
  const { data: authData } = await supabase.auth.getUser();

  if (!authData?.user) {
    return redirect("/auth");
  }

  return redirect("/admin/dashboard");
};

export default Admin;