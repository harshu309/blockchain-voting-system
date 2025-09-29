import { Box, Container, Typography } from "@mui/material";
import ProposalCard from "../components/ProposalCard";

export default function Proposals() {
  const proposals = [
    { id: 1, title: "Fund Research Project A", votesYes: 80, votesNo: 20 },
    { id: 2, title: "Upgrade DAO Governance", votesYes: 120, votesNo: 45 },
    { id: 3, title: "New Community Token", votesYes: 200, votesNo: 60 },
  ];

  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "background.default", py: 6 }}>
      <Container maxWidth="md">
        <Typography variant="h4" fontWeight={700} gutterBottom color="white">
          🗳️ Active Proposals
        </Typography>
        {proposals.map((p) => (
          <ProposalCard key={p.id} {...p} />
        ))}
      </Container>
    </Box>
  );
}
