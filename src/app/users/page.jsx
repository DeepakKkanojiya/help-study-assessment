"use client";
import { useEffect } from "react";
import useUsersStore from "@/store/usersStore";
import { Table, TableHead, TableRow, TableCell, TableBody } from "@mui/material";
import Link from "next/link";

export default function UsersPage() {
  const { users, fetchUsers } = useUsersStore();

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Name</TableCell>
          <TableCell>Email</TableCell>
          <TableCell>Company</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {users.map((u) => (
          <TableRow key={u.id}>
            <TableCell>
              <Link href={`/users/${u.id}`}>{u.firstName}</Link>
            </TableCell>
            <TableCell>{u.email}</TableCell>
            <TableCell>{u.company.name}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
