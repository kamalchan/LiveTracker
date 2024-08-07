import { Avatar, Box, Grid, Typography } from "@mui/material";
import React from "react";
import { feedback } from "../../data/feedback";

const Review = () => {
  return (
    <Box sx={{ padding: "15px" }}>
      <Typography variant="h5">Customer Feedback</Typography>
      <Typography sx={{ fontSize: "12px", opacity: 0.7 }}>
        
      </Typography>
      <Box sx={{ my: 2 }}>
        {feedback.map(({ id, name, feedback, rating, flag }) => (
          <Grid
            container
            spacing={2}
            key={id}
            sx={{ my: 3 }}
          >
            <Grid item xs={12} sm={4} md={3} lg={2}>
              <Box display="flex" alignItems="center">
                <Avatar src={flag} sx={{ width: 30, height: 30, mr: 1 }} />
                <Typography>{name}</Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={8} md={9} lg={10}>
              <Box sx={{ ml: { sm: 4, md: 6, lg: 8 } }}>
                <Typography>{feedback}</Typography>
                <Typography sx={{ fontSize: "16px", fontWeight: "bold" }}>
                  {`Rating: ${'★'.repeat(rating)}${'☆'.repeat(5 - rating)}`}
                </Typography>
              </Box>
            </Grid>
          </Grid>
        ))}
      </Box>
    </Box>
  );
};

export default Review;
