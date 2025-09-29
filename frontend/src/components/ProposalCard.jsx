import React from "react";
import { Card, CardContent, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

function ProposalCard({ id, title, description }) {
  return (
    <Card sx={{ background: "#1a1f36", marginBottom: 2 }}>
      <CardContent>
        <Typography variant="h6" gutterBottom>{title}</Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
        <Button
          variant="contained"
          color="secondary"
          component={Link}
          to={`/proposals/${id}`}
          sx={{ marginTop: 2 }}
        >
          View Proposal
        </Button>
      </CardContent>
    </Card>
  );
}

export default ProposalCard;
