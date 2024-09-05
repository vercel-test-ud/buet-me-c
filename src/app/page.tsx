import Header from "@/components/Header"
import Option from "@/components/Options"
import React from "react";

export default function Page() {
    return (
      <div>
        <Header />
        <div className="flex justify-center items-center h-screen flex-col">
            <Option page="students" />
            <Option page="news" />
        </div>
      </div>
    )
}