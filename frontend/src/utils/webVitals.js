import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals';

// Function to send metrics to analytics
const sendToAnalytics = (metric) => {
  // In production, you would send this to your analytics service
  console.log('Performance Metric:', metric);
  
  // Example: Send to Google Analytics 4
  if (typeof gtag !== 'undefined') {
    gtag('event', metric.name, {
      value: Math.round(metric.value),
      metric_id: metric.id,
      metric_delta: metric.delta,
    });
  }
  
  // Example: Send to custom analytics endpoint
  // fetch('/api/analytics/vitals', {
  //   method: 'POST',
  //   body: JSON.stringify(metric),
  //   headers: { 'Content-Type': 'application/json' }
  // });
};

// Initialize Web Vitals monitoring
export const initWebVitals = () => {
  getCLS(sendToAnalytics);
  getFID(sendToAnalytics);
  getFCP(sendToAnalytics);
  getLCP(sendToAnalytics);
  getTTFB(sendToAnalytics);
};

// Performance monitoring component
export const WebVitalsReporter = () => {
  if (typeof window !== 'undefined') {
    initWebVitals();
  }
  return null;
};
