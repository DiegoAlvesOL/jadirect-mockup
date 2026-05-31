/**
 * Purpose   : Mock data for the application
 * Consumed by: All pages
 * Layer     : Data — Mock Data
 */

const mockData = {
  // Customer shipments
  shipments: [
    {
      id: 'shipment-001',
      reference: 'ORD-2026-05-001',
      origin: 'Dublin Business Center, Dublin',
      destination: 'Cork Industrial Park, Cork',
      date: 'May 31',
      time: '10:30',
      status: 'scheduled',
      weight: '250 kg',
    },
    {
      id: 'shipment-002',
      reference: 'ORD-2026-05-002',
      origin: 'Galway Port Terminal, Galway',
      destination: 'Dublin Distribution Center, Dublin',
      date: 'May 31',
      time: '14:00',
      status: 'in-transit',
      weight: '500 kg',
    },
    {
      id: 'shipment-003',
      reference: 'ORD-2026-05-003',
      origin: 'Limerick Warehouse, Limerick',
      destination: 'Dublin Main Office, Dublin',
      date: 'June 1',
      time: '09:00',
      status: 'pending',
      weight: '180 kg',
    },
    {
      id: 'shipment-004',
      reference: 'ORD-2026-04-999',
      origin: 'Belfast Facility, Belfast',
      destination: 'Dublin Logistics Hub, Dublin',
      date: 'May 30',
      time: '11:30',
      status: 'delivered',
      weight: '320 kg',
    },
  ],

  // Tracking timeline for shipment
  trackingTimeline: [
    {
      title: 'Pickup Completed',
      date: 'May 31, 10:00',
      description: 'Your shipment was collected in Galway',
      status: 'completed',
    },
    {
      title: 'In Transit',
      date: 'May 31, 14:00',
      description: 'Sent to Dublin',
      status: 'completed',
    },
    {
      title: 'Out for Delivery',
      date: 'June 1, 08:30',
      description: 'Your shipment will be delivered today',
      status: 'active',
    },
    {
      title: 'Delivered',
      date: 'Expected today',
      description: 'Will be delivered to the provided address',
      status: 'pending',
    },
  ],

  // Vehicle and driver info
  vehicleInfo: {
    model: 'Mercedes Sprinter',
    plate: 'JA-D-2024-002',
    driver: 'Sinéad O Brien',
    phone: '+353 85 234 5678',
  },
};
