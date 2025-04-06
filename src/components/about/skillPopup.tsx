import { Close } from "@mui/icons-material";
import { Box, Dialog, DialogContent, DialogTitle, Fade, IconButton, Typography, useMediaQuery, useTheme } from "@mui/material";
import { FC } from "react";

interface Props {
    open: boolean
    onClose: () => void
    title: string
    description: string
  }
  

const SkillPopup: FC<Props> = ({open, onClose, title, description}) => {
    const theme = useTheme()
    const fullScreen = useMediaQuery(theme.breakpoints.down("sm"))
  
    return (
      <Dialog
        open={open}
        onClose={onClose}
        fullScreen={fullScreen}
        maxWidth="sm"
        fullWidth
        TransitionComponent={Fade}
        TransitionProps={{ timeout: 400 }}
        PaperProps={{
          elevation: 5,
          sx: {
            borderRadius: 3,
            overflow: "hidden",
          },
        }}
      >
        <Box sx={{ position: "relative", bgcolor: "background.paper" }}>
          <DialogTitle component={"h2"} sx={{ pr: 6, fontWeight: 600, fontSize: 25}}>
              {title}
          </DialogTitle>
  
          <IconButton
            aria-label="close"
            onClick={onClose}
            sx={{
              position: "absolute",
              right: 16,
              top: 16,
              color: "text.secondary",
            }}
          >
            <Close />
          </IconButton>
  
          <DialogContent dividers>
            <Typography variant="body1">{description}</Typography>
          </DialogContent>
        </Box>
      </Dialog>
    )
}

export default SkillPopup