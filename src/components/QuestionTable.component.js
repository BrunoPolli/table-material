import React from "react";
import { Link } from "@reach/router";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import Paper from '@material-ui/core/Paper';

export const QuestionsTable = (props) => {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Question</TableCell>
            <TableCell>StartedAt</TableCell>
            <TableCell>Status</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        {props.rows.map((row) => (
          <TableRow key={row.id}>
            <TableCell component="th" scope="row">
              <Link to={`/users/${row.id}`}>
                {row.question}
              </Link>
            </TableCell>
            <TableCell>{row.startedAt}</TableCell>
            <TableCell>{row.status}</TableCell>
            <TableCell>
              <EditIcon onClick={() => {}}/>
              <DeleteIcon onClick={() => {}}/>
            </TableCell>
          </TableRow>
        ))}
        <TableBody>
        </TableBody>
      </Table>
    </TableContainer>
  )
}