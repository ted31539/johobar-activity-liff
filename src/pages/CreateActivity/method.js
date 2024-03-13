/**
 *
 * @param {{titel: string, content:string, startTime: Date}} data
 * @param {number} customerId
 */
export function parseCreateActivityDetails(data, customerId) {
  return {
    ...data,
    startTime: data.startTime.toISOString(),
    member: JSON.stringify([customerId]),
    host: JSON.stringify([customerId]),
  };
}
