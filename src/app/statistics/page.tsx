import Charts from "@/components/discover/Charts";
import DiscoverGrid from "@/components/discover/DiscoverGrid";
import Header from "@/components/home/Header";

function Insights() {
  return (
    <div>
      <Header
        img="/backimage.svg"
        title="Islamic Medical Association"
        description="Tel: 07 735 734"
        logo="/logo.svg"
      />
      <DiscoverGrid showButton={false} itemsToShow={0} />
      <Charts />
    </div>
  );
}

export default Insights;
