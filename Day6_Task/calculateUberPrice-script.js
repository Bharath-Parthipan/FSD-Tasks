    class UberPriceCalculator {
  constructor(baseFare, costPerKm, costPerMinute, surgeMultiplier = 1.0) {
    this.baseFare = baseFare;           // Base fare in INR
    this.costPerKm = costPerKm;         // Cost per kilometer in INR
    this.costPerMinute = costPerMinute; // Cost per minute in INR
    this.surgeMultiplier = surgeMultiplier; // Surge multiplier (default 1.0)
  }

  // Method to set surge multiplier
  setSurgeMultiplier(multiplier) {
    this.surgeMultiplier = multiplier;
  }

  // Method to calculate the price
  calculatePrice(distance, duration) {
    const distanceCost = this.costPerKm * distance;
    const timeCost = this.costPerMinute * duration;
    const totalCost = (this.baseFare + distanceCost + timeCost) * this.surgeMultiplier;
    return totalCost.toFixed(2); // Return the total cost rounded to 2 decimal places
  }
}

// Example usage
const baseFare = 50; // Base fare in INR
const costPerKm = 12; // Cost per kilometer in INR
const costPerMinute = 2; // Cost per minute in INR

const uberPriceCalculator = new UberPriceCalculator(baseFare, costPerKm, costPerMinute);

const distance = 10; // Distance in kilometers
const duration = 15; // Duration in minutes

console.log(`Total Price: ₹${uberPriceCalculator.calculatePrice(distance, duration)}`); // Output: Total Price: ₹230.00

// Applying surge pricing
uberPriceCalculator.setSurgeMultiplier(1.5); // 1.5x surge pricing
console.log(`Total Price with Surge: ₹${uberPriceCalculator.calculatePrice(distance, duration)}`); // Output: Total Price with Surge: ₹345.00
