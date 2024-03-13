/**
 *
 * @param {{titel: string, content:string, startTime: Date}} data
 * @param {number} customerId
 */
export function parseUpdateActivityDetails(data, current) {
  return {
    ...current,
    ...data,
    host: JSON.stringify(current?.host),
    member: JSON.stringify(current?.member),
    startTime: data.startTime.toISOString(),
  };
}
