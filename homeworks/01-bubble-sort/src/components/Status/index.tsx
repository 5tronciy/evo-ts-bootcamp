type Props = {
  status: string;
};

export const Status = (props: Props) => {
  return <pre>{props.status}</pre>;
};
