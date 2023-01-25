export function formatClaimStatus(statusKey) {
  switch (statusKey) {
    case 'denied':
      return 'Denied';
    case 'unsubmitted':
      return 'Not Submitted';
    case 'paid':
      return 'Approved';
    case 'pending':
      return 'Pending';
    default:
      return '';
  }
}

export function getStatusColor(statusKey) {
  switch (statusKey) {
    case 'denied':
      return 'text-red-700';
    case 'unsubmitted':
      return 'text-gray-700';
    case 'paid':
      return 'text-green-700';
    case 'pending':
      return 'text-gray-600';
    default:
      return 'text-gray-600';
  }
}
