import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "../components/ui/card"
import PropTypes from 'prop-types';
  

const Box = ({label,value}) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle><p>{value}</p></CardTitle>
        <CardDescription><p className="text-[#ff9a26]">{label}</p></CardDescription>
      </CardHeader>
    </Card>
  );
};
Box.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default Box;
