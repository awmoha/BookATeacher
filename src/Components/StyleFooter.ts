import { Breadcrumbs, Stack } from "@mui/material";
import { styled } from "@mui/material/styles";

export const FooterContainer = styled("footer")({
    backgroundColor: "#3f51b5",
    color: "#fff",
    width: "100vw",
    textAlign: "center",
  });
  
  export const FooterContainerButtons = styled("footer")({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "20px",
  });
  
  export const IconWrapper = styled(Stack)({
    fontSize: "24px",
    padding: "20px",
    cursor: "pointer",
    alignItems: "center",
    justifyContent: "center",
  });
  
  export const ButtonGroup = styled(Breadcrumbs)({
    display: "flex",
    alignItems: "center",
    gap: "8px",
  });
  
  export const CenterButton = styled(Breadcrumbs)({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  });
  
  export const RightButtonGroup = styled(Breadcrumbs)({
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    gap: "8px",
  });
  
 