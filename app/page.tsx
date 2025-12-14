import AboutUsResumen from "@/components/home/AboutUsResumen";
import Slider from "@/components/ui/Slider";

export default function Home() {
  return (
    <div >
      {/* Componente Slider de imagenes que no son responsive - todavia */}
      <Slider/>
      {/* Componente resumido - sobre nosotros  */}
      <AboutUsResumen/>
    </div>
  );
}
