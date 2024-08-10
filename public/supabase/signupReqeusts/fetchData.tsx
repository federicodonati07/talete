// fetchData.tsx
import supabase from "@/public/supabase/supabaseClient";

const fetchData = async (email: string) => {
  const { data, error } = await supabase
    .from("user_info")
    .select("*")
    .eq("email", email);

  if (error) {
    console.error("Error fetching data: ", error);
    return null; // Return null in case of error
  } else {
    return data; // Ensure to return data here
  }
};

export default fetchData;
