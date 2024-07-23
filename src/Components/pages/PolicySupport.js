import React from 'react';

const PolicySupport = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Store Policies</h1>
      
      <section style={styles.section}>
        <h2 style={styles.subHeader}>Shipping Policy</h2>
        <p style={styles.text}>
          We offer worldwide shipping with various shipping options. Orders are processed within 1-2 business days. Shipping times vary based on your location and the shipping method selected. Tracking information will be provided once your order has shipped.
        </p>
      </section>
      
      <section style={styles.section}>
        <h2 style={styles.subHeader}>Return Policy</h2>
        <p style={styles.text}>
          We accept returns within 30 days of purchase. Items must be unworn, unwashed, and in their original condition with all tags attached. To initiate a return, please contact our customer service team with your order number and reason for return.
        </p>
      </section>
      
      <section style={styles.section}>
        <h2 style={styles.subHeader}>Exchange Policy</h2>
        <p style={styles.text}>
          If you wish to exchange an item for a different size or color, please contact us within 30 days of purchase. Exchanges are subject to product availability. Return the original item following our return instructions, and we will process the exchange once we receive the returned item.
        </p>
      </section>
      
      <section style={styles.section}>
        <h2 style={styles.subHeader}>Privacy Policy</h2>
        <p style={styles.text}>
          Your privacy is important to us. We are committed to protecting your personal information and ensuring its confidentiality. We collect personal data to process your orders and provide a personalized shopping experience. For more details, please review our full privacy policy.
        </p>
      </section>
      
      <section style={styles.section}>
        <h2 style={styles.subHeader}>Customer Support</h2>
        <p style={styles.text}>
          If you have any questions or need assistance, our customer support team is here to help. You can reach us via email at support@dressshop.com or call us at 1-800-123-4567. We are available Monday through Friday, 9 AM - 5 PM.
        </p>
      </section>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
  },
  header: {
    textAlign: 'center',
    marginBottom: '20px',
  },
  section: {
    marginBottom: '20px',
  },
  subHeader: {
    fontSize: '1.5rem',
    marginBottom: '10px',
  },
  text: {
    fontSize: '1rem',
    lineHeight: '1.6',
  },
};

export default PolicySupport;
