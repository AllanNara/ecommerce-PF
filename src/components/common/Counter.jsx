import PropTypes from "prop-types";
import AddIcon from "@mui/icons-material/Add";

import RemoveIcon from "@mui/icons-material/Remove";
import useCount from "../../hooks/useCount";
import { Box, Button, Typography } from "@mui/material";
import { useEffect } from "react";

function Counter({ initial, minimum, maximum, cb }) {
	const { count, decrement, increment } = useCount(initial, minimum, maximum);

  useEffect(() => {
    if(count) cb(count)
  },[count, cb])

	return (
		<Box
			sx={{
				backgroundColor: "#fff",
				border: 1,
				borderColor: "#ccc",
				width: "95%",
				margin: "auto",
				height: "auto",
				display: "flex",
				justifyContent: "space-around",
			}}
		>
			<Button onClick={decrement}>
				<RemoveIcon fontSize="small" />
			</Button>
			<Typography component={"span"} margin={"auto"}>
				{maximum ? count : 0}
			</Typography>
			<Button onClick={increment}>
				<AddIcon fontSize="small" />
			</Button>
		</Box>
	);
}

Counter.propTypes = {
	initial: PropTypes.number,
  minimum: PropTypes.number,
  maximum: PropTypes.number,
  cb: PropTypes.func.isRequired
};

export default Counter;