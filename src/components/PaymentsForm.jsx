import { Box, Grid, TextField, Typography } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updatePayment } from "../feature/checkout-slice";

export default function PaymentsForm() {
  const payment = useSelector((state) => state.checkout.payment);
  const dispatch = useDispatch();
  function handleChange(event) {
    const { name, value } = event.target ?? {};
    dispatch(updatePayment({ [name]: value }));
  }
  return (
    <>
      <Typography variant="h6" gutterBottom>
        Payment Method
      </Typography>
      <Box component="form" onChange={handleChange}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <TextField
              variant="standard"
              required
              label="Name on card"
              fullWidth
              autoComplete="cc-name"
              name="name"
              id="name"
              defaultValue={payment?.name ?? ""}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              variant="standard"
              required
              label="Card Number"
              fullWidth
              autoComplete="cc-number"
              name="cardNumber"
              id="cardNumber"
              defaultValue={payment?.cardNumber ?? ""}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              variant="standard"
              required
              label="Expiry Date mm/yy"
              fullWidth
              autoComplete="cc-exp"
              name="expDate"
              id="expDate"
              defaultValue={payment?.expDate ?? ""}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              variant="standard"
              type="password"
              required
              label="CVV"
              fullWidth
              autoComplete="cc-csc"
              name="cvv"
              id="cvv"
              defaultValue={payment?.cvv ?? ""}
            />
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
