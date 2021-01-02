import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';

const columns = [
  { id: 'AWBNumber', label: 'AWB Number', width: 'auto', },
  { id: 'transporter', label: 'Transporter', width: 'auto', },
  {
    id: 'source',
    label: 'Source',
    width: 'auto',
    align: 'right',
  },
  {
    id: 'destination',
    label: 'Destination',
    width: 'auto',
    align: 'right',
  },
  {
    id: 'brand',
    label: 'Brand',
    width: 'auto',
    align: 'right',
  },
  {
    id: 'startDate',
    label: 'Start Date',
    width: 'auto',
    align: 'right',
  },
  {
    id: 'ETD',
    label: 'ETD',
    width: 'auto',
    align: 'right',
  },
  {
    id: 'status',
    label: 'Status',
    width: 'auto',
    align: 'right',
  },
];

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    maxHeight: 600,
  },
});

export default function DelTable({selectedData, setClickedTimeline}) {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  let rows = [];
  for(let i=0; i<selectedData.length; i++) {
      let etd = "" ;

      if('extra_fields' in selectedData[i]){
        etd = selectedData[i]['extra_fields']['expected_delivery_date'];
      }

      let scan = [];
      if('scan' in selectedData[i]) {
          scan = selectedData[i]['scan'];
      }

      let obj = {
        AWBNumber : selectedData[i]['awbno'],
        transporter : selectedData[i]['carrier'],
        source : selectedData[i]['from'],
        destination : selectedData[i]['to'],
        brand : selectedData[i]['carrier'],
        startDate : selectedData[i]['pickup_date'],
        ETD : etd,
        status : selectedData[i]['current_status'],
        scan : scan
      }
      rows.push(obj);
  }

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.code} onClick={()=>{
                    setClickedTimeline(row.scan)
                }}>
                  {columns.map((column) => {
                    const value = row[column.id];
                    return (
                      <TableCell key={column.id} align={column.align}>
                        {column.format && typeof value === 'number' ? column.format(value) : value}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  );
}