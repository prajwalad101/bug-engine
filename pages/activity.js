import useActivities from "../hooks/useActivities";

function Activity() {
  const { isLoading, isError, data, error } = useActivities();

  if (isLoading) {
    return <div>Loading activities</div>;
  }

  if (isError) {
    return <div>Some error occurred</div>;
  }

  console.log(data);

  return <div>Activities</div>;
}

export default Activity;
