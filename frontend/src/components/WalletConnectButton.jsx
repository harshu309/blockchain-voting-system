import { Button } from "@mui/material";
import { useState } from "react";

export default function WalletConnectButton() {
  const [connected, setConnected] = useState(false);

  return (
    <Button
      variant="contained"
      color={connected ? "secondary" : "primary"}
      onClick={() => setConnected(!connected)}
    >
      {connected ? "Wallet Connected ✅" : "Connect Wallet"}
    </Button>
  );
}
