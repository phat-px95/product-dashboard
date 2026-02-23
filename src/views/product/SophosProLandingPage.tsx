import React from "react";
import SophosProDashboardImage from "../../assets/images/sophos-pro.png"

import {
  Box,
  Container,
  Grid,
  Typography,
  Button,
  Card,
  CardContent,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { styled } from "@mui/material/styles";

const HeroSection = styled(Box)(({ theme }) => ({
  background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
  color: "white",
  padding: theme.spacing(8, 0),
  textAlign: "center",
  [theme.breakpoints.down("md")]: {
    padding: theme.spacing(4, 0),
  },
}));

const FeatureCard = styled(Card)(({ theme }) => ({
  height: "100%",
  transition: "transform 0.3s ease-in-out",
  "&:hover": {
    transform: "translateY(-4px)",
  },
}));

const ProductImage = styled("img")(({ theme }) => ({
  width: "100%",
  maxWidth: "1200px",
  height: "auto",
  borderRadius: theme.spacing(2),
  boxShadow: theme.shadows[8],
  [theme.breakpoints.down("sm")]: {
    maxWidth: "100%",
  },
}));

const ContactSection = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.grey[100],
  padding: theme.spacing(6, 0),
  marginTop: theme.spacing(8),
}));

const SophosProLandingPage: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const features = [
    {
      title: "Real-time Analytics",
      description: "Monitor your business metrics with live data updates and comprehensive insights that help you make informed decisions.",
      icon: "📊"
    },
    {
      title: "Customizable Widgets",
      description: "Create personalized dashboards with drag-and-drop widgets tailored to your specific business needs and workflows.",
      icon: "🎛️"
    },
    {
      title: "Team Collaboration",
      description: "Share dashboards, collaborate on insights, and work together seamlessly with advanced sharing and permission controls.",
      icon: "👥"
    }
  ];

  return (
    <Box>
      <HeroSection>
        <Container maxWidth="lg">
          <Typography
            variant={isMobile ? "h3" : "h2"}
            component="h1"
            gutterBottom
            sx={{ fontWeight: 600 }}
          >
            Sophos Data Pro
          </Typography>
          <Typography
            variant={isMobile ? "h6" : "h5"}
            component="h2"
            sx={{ mb: 4, opacity: 0.9, maxWidth: "800px", mx: "auto" }}
          >
            Transform your data into actionable insights with our powerful, 
            intuitive dashboard platform designed for modern businesses.
          </Typography>
          <Button
            variant="contained"
            size="large"
            sx={{
              bgcolor: "white",
              color: theme.palette.primary.main,
              px: 4,
              py: 1.5,
              fontSize: "1.1rem",
              "&:hover": {
                bgcolor: theme.palette.grey[100],
              },
            }}
          >
            Get Started Today
          </Button>
        </Container>
      </HeroSection>

      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Box textAlign="center" mb={6}>
          <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 500 }}>
            Powerful Dashboard Interface
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ maxWidth: "600px", mx: "auto" }}>
            Experience the next generation of data visualization and analytics 
            with our intuitive and powerful dashboard interface.
          </Typography>
        </Box>
        
        <Box display="flex" justifyContent="center" mb={8}>
          <ProductImage
            src={SophosProDashboardImage}
            alt=" Pro Interface Preview"
          />
        </Box>

        <Box textAlign="center" mb={8}>
          <Typography variant="h5" component="h2" gutterBottom sx={{ fontWeight: 500 }}>
            Built for Modern Businesses
          </Typography>
          <Typography 
            variant="body1" 
            color="text.secondary" 
            sx={{ 
              maxWidth: "800px", 
              mx: "auto", 
              lineHeight: 1.7,
              fontSize: "1.1rem"
            }}
          >
            Sophos Data Pro combines cutting-edge technology with user-friendly design 
            to deliver comprehensive business intelligence solutions. Whether you're tracking 
            sales performance, monitoring operational metrics, or analyzing customer behavior, 
            our platform provides the tools you need to succeed in today's competitive landscape.
          </Typography>
        </Box>
      </Container>

      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Box textAlign="center" mb={6}>
          <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 500 }}>
            Key Features
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Discover the powerful features that make Sophos Data Pro the perfect choice for your business.
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {features.map((feature, index) => (
            <Grid item xs={12} md={4} key={index}>
              <FeatureCard>
                <CardContent sx={{ p: 4, textAlign: "center" }}>
                  <Typography variant="h2" component="div" sx={{ mb: 2 }}>
                    {feature.icon}
                  </Typography>
                  <Typography variant="h5" component="h3" gutterBottom sx={{ fontWeight: 500 }}>
                    {feature.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6 }}>
                    {feature.description}
                  </Typography>
                </CardContent>
              </FeatureCard>
            </Grid>
          ))}
        </Grid>
      </Container>

      <ContactSection>
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 500 }}>
                Ready to Get Started?
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ mb: 3, lineHeight: 1.6 }}>
                Join thousands of businesses already using Sophos Data Pro to make better decisions with their data.
              </Typography>
              <Button
                variant="contained"
                size="large"
                sx={{ mr: 2, mb: { xs: 2, md: 0 } }}
              >
                Start Free Trial
              </Button>
            </Grid>
            <Grid item xs={12} md={6}>
              <Card sx={{ p: 3 }}>
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 500 }}>
                  Contact Information
                </Typography>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  📧 Email: sales@sophosdatapro.com
                </Typography>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  📞 Phone: +1 (555) 123-4567
                </Typography>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  🏢 Address: 123 Street, Calgary, AB, Canada 94105
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  🕒 Business Hours: Mon-Fri 9AM-6PM PST
                </Typography>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </ContactSection>
    </Box>
  );
};

export default SophosProLandingPage;
