import Navbar from "@/components/Navbar"
import Loading_Sc from "@/components/Loading_SC"
import Screen from "@/components/Screen";
import Slide from "./Slide";
import "../app/globals.css"
export default function index() {
  return (
    <div className="pb-[1200px]">
        <Loading_Sc />
        <Navbar />
        <Slide />
        <Screen />
    </div>
  );
}
