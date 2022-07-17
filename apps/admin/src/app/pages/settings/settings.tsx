import { Container, Typography } from '@mui/material';

const Settings = () => {
  return (
    <Container sx={{ my: 4 }}>
      {[...new Array(12)].map((_, idx) => (
        <Typography key={idx}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus nemo
          excepturi doloremque eos laudantium dolorem alias accusamus
          perferendis, deserunt quibusdam provident quae cum aut aspernatur
          voluptatum! Aperiam doloremque praesentium tempora. Lorem ipsum, dolor
          sit amet consectetur adipisicing elit. Qui laboriosam ratione, cum
          minus explicabo aspernatur saepe? Aut, animi, quas reprehenderit optio
          cumque amet quia officia nobis velit praesentium ducimus earum? Lorem
          ipsum dolor, sit amet consectetur adipisicing elit. Minima inventore
          itaque amet quas est numquam ut a nemo ab voluptatum neque animi ex
          ratione velit molestias, pariatur labore, eum vitae?
        </Typography>
      ))}
    </Container>
  );
};

export default Settings;
