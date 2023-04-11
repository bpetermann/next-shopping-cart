import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function SimpleAccordion({ color, backgroundColor, headline }) {
  return (
    <div>
      <Accordion
        sx={{
          margin: '1.5rem 0',
          boxShadow: 'none',
          backgroundColor: backgroundColor,
          color: color,
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{ color: color }} />}
          aria-controls='panel1a-content'
          id='panel1a-header'
        >
          <Typography>{headline[0]}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography
            sx={{
              fontSize: '0.8rem',
              color: color,
            }}
          >
            When you complete your order, we will show you in what timeframe your package is expected to arrive.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        sx={{
          margin: '1.5rem 0',
          boxShadow: 'none',
          '&:before': {
            display: 'none',
          },
          backgroundColor: backgroundColor,
          color: color,
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{ color: color }} />}
          aria-controls='panel2a-content'
          id='panel2a-header'
        >
          <Typography>{headline[1]}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography
            sx={{
              fontSize: '0.8rem',
              color: color,
            }}
          >
            You can redeem your promotional voucher in the last step of the order process.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        sx={{
          margin: '1.5rem 0',
          boxShadow: 'none',
          '&:before': {
            display: 'none',
          },
          backgroundColor: backgroundColor,
          color: color,
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{ color: color }} />}
          aria-controls='panel2a-content'
          id='panel2a-header'
        >
          <Typography>{headline[2]}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography
            sx={{
              fontSize: '0.8rem',
              color: color,
            }}
          >
            If you are shipping internationally, there are several delivery speed options available during the checkout process, usually standard, express and priority delivery.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

SimpleAccordion.defaultProps = {
  color: '#000',
  headline: ['Help & Contact', 'Gift cards', 'Shipping'],
};
