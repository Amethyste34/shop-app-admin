import { ReactNode } from "react";

export default async function AdminLayout({
    children,
  }: Readonly<{
    children: ReactNode;
  }>) {

    //Todo: Check if user is authenticated and if user is an admin before rendering the page

    return (
      <>
        {children}
      </>
    );
}

//Dans Terminal : npm run dev
//Lecture vidéo : 3:44:03 