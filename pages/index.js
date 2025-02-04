import Navbar from "@/components/Navbar"
import Loading_Sc from "@/components/Loading_SC"
import Screen from "@/components/Screen";
import "../app/globals.css"
export default function index() {
  return (
    <div className="">
        <Loading_Sc />
        <Navbar />
        <Screen />
    </div>
  );
}
