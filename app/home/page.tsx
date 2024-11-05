"use client";

import { useQuery } from "@tanstack/react-query";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
} from "@mui/material";
import theme from "@/theme";

const fetchObjects = async () => {
  const response = await fetch("https://api.restful-api.dev/objects");
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  return response.json();
};

export default function HomePage() {
  const { data, error, isLoading, isError } = useQuery({
    queryKey: ["objects"],
    queryFn: fetchObjects,
  });

  if (isLoading) return <Typography>Loading...</Typography>;
  if (isError)
    return <Typography color="error">Error: {error.message}</Typography>;

  return (
      <TableContainer component={Paper} >
        <Typography variant="h4" component="h1" gutterBottom>
          Objects Table
        </Typography>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Data</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((object: any) => (
              <TableRow key={object.id}>
                <TableCell>{object.id}</TableCell>
                <TableCell>{object.name}</TableCell>
                <TableCell>{JSON.stringify(object.data)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
   
  );
}
