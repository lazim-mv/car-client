import { getCarById } from "../../../utils/carservices/carService";
import Wrapper from "../Wrapper";


export default async function Page({ params }) {
  if (!params?.CarId) {
    return <div>Error: Car ID is missing.</div>;
  }

  try {
    const carData = await getCarById(params.CarId);

    return (
      <>
        <Wrapper carData={carData} />
      </>
    );
  } catch (error) {
    return <div>{error.message}</div>;
  }
}
