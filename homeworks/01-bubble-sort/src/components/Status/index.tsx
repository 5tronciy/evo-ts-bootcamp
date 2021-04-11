type Props = {
  status: string;
};
const Status = (props: Props) => {
  return <pre>{props.status}</pre>;
};

export default Status;
