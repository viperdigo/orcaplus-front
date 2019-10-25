import React from 'react';
import { Helmet } from 'react-helmet';
import { PapperBlock, SampleComponent } from 'dan-components';

class SamplePage extends React.Component {
  render() {
    const title = 'Dandelion Pro. Blank Page TESTE';
    const description = 'Dandelion Pro TESTE';
    return (
      <div>
        <Helmet>
          <title>{title}</title>
          <meta name="description" content={description} />
          <meta property="og:title" content={title} />
          <meta property="og:description" content={description} />
          <meta property="twitter:title" content={title} />
          <meta property="twitter:description" content={description} />
        </Helmet>
        <PapperBlock title="Blank Page" desc="Some text description">
          Content
          <SampleComponent />
        </PapperBlock>
      </div>
    );
  }
}

export default SamplePage;
