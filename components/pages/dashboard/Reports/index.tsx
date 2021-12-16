import { formatCurrency } from 'components/utils';
import React from 'react';
import styled from 'styled-components';
import { lighten } from 'polished';

import Charts from 'components/pages/dashboard/Reports/Charts';
import { theme } from 'components/Theme';

export default function Reports() {
  return (
    <div>
      <TopContainer>
        <div className="title-container">
          <h1>Reports</h1>
        </div>
      </TopContainer>

      <TotalsContainer>
        {FAKE_REPORT_TOTALS.map((report, key) => (
          <TotalsCard key={key}>
            <h4 className="card-title">{report.totalsTitle}</h4>
            <h4 className="card-statistic">{report.totalsAmount.toLocaleString('en-US')}</h4>
          </TotalsCard>
        ))}
      </TotalsContainer>

      <GraphsContainer>
        <Charts />
      </GraphsContainer>
    </div>
  );
}

const TopContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;

  .title-container {
    h1 {
      margin: 0.5rem;
    }
  }
`;

const TotalsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 1rem;

  @media (max-width: 1100px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 530px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const TotalsCard = styled.div`
  background: ${lighten(0.1, 'gainsboro')};
  border: 1px solid ${({ theme }) => theme.colors.gray};
  padding: 1rem;
  border-radius: 6px;

  .card-title {
    display: inline;
    color: black;
    background: ${({ theme }) => theme.colors.silver};
    margin: 0;
    padding: 0.5rem 1rem;
    border-radius: 50px;
  }

  .card-statistic {
    color: ${({ theme }) => theme.colors.dark};
    text-align: right;
    font-size: 2rem;
    margin: 1.5rem 0 0;
    padding-bottom: 1.5rem;
    border-bottom: 5px solid ${({ theme }) => theme.colors.silver};
  }
`;

const GraphsContainer = styled.div``;

const FAKE_REPORT_TOTALS = [
  { totalsTitle: '#fineart', totalsAmount: 23423 },
  { totalsTitle: '#jewelry', totalsAmount: 77039 },
  { totalsTitle: '#rare', totalsAmount: 32378 },
  { totalsTitle: '#bespoke', totalsAmount: 14738 },
];
