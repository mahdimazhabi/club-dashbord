import PageHeader from "@/components/PageHeader";
import useMission from "@/services/useMission";
import { useNavigate } from "react-router-dom";

const MissionDetail = () => {
  const { detailMission } = useMission();
  const navigate = useNavigate();
  console.log(detailMission.data);

  return (
    <section>
      <PageHeader
        title="جزییات ماموریت "
        onBack={() => {
          navigate("/mission");
        }}
      />
    </section>
  );
};

export default MissionDetail;
