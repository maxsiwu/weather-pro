import { Box, CircularProgress } from "@material-ui/core";
import React from "react";

export const Spinner = () => (
    <Box display="flex" justifyContent="center" alignItems="middle" p={1}>
        <CircularProgress color="secondary" />
    </Box>
)