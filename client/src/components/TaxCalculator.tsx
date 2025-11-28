import { useState } from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calculator, CheckCircle2, TrendingDown } from "lucide-react";

interface TaxComparison {
  oldRegime: number;
  newRegime: number;
  recommended: "old" | "new";
  difference: number;
  professionalSavings: number;
}

export default function TaxCalculator() {
  const [income, setIncome] = useState("");
  const [deductions, setDeductions] = useState("");
  const [result, setResult] = useState<TaxComparison | null>(null);

  const calculateTaxForRegime = (incomeAmount: number, deductionAmount: number, regime: "old" | "new"): number => {
    let tax = 0;
    const taxableIncome = incomeAmount - (regime === "old" ? deductionAmount : 0);

    if (regime === "old") {
      // Old regime rates (with deductions)
      if (taxableIncome > 1000000) {
        tax = (taxableIncome - 1000000) * 0.3 + 125000;
      } else if (taxableIncome > 500000) {
        tax = (taxableIncome - 500000) * 0.2 + 25000;
      } else if (taxableIncome > 250000) {
        tax = (taxableIncome - 250000) * 0.05;
      }
    } else {
      // New regime rates (no deductions, lower rates)
      if (taxableIncome > 1500000) {
        tax = (taxableIncome - 1500000) * 0.3 + 187500;
      } else if (taxableIncome > 1200000) {
        tax = (taxableIncome - 1200000) * 0.2 + 127500;
      } else if (taxableIncome > 900000) {
        tax = (taxableIncome - 900000) * 0.15 + 82500;
      } else if (taxableIncome > 600000) {
        tax = (taxableIncome - 600000) * 0.10 + 52500;
      } else if (taxableIncome > 300000) {
        tax = (taxableIncome - 300000) * 0.05 + 37500;
      }
    }

    return Math.round(tax);
  };

  const calculateTax = () => {
    const incomeAmount = parseFloat(income) || 0;
    const deductionAmount = parseFloat(deductions) || 0;

    const oldRegimeTax = calculateTaxForRegime(incomeAmount, deductionAmount, "old");
    const newRegimeTax = calculateTaxForRegime(incomeAmount, 0, "new");

    const recommended = oldRegimeTax <= newRegimeTax ? "old" : "new";
    const difference = Math.abs(oldRegimeTax - newRegimeTax);
    const lowerTax = Math.min(oldRegimeTax, newRegimeTax);
    const professionalSavings = Math.round(lowerTax * 0.175); // 15-20% savings with expert help

    setResult({
      oldRegime: oldRegimeTax,
      newRegime: newRegimeTax,
      recommended,
      difference,
      professionalSavings
    });
  };

  return (
    <section className="py-24 sm:py-32 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="px-4 py-2 rounded-full bg-accent/10 text-accent-foreground text-sm font-medium border border-accent/30 inline-block mb-4">
            Free Tool
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-6" data-testid="text-calculator-title">
            Income Tax Savings Calculator
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Estimate your potential tax savings with professional financial consulting. Get a quick calculation to see how much you could save.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="p-8">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <Label htmlFor="income">Annual Income (₹)</Label>
                  <Input
                    id="income"
                    type="number"
                    placeholder="e.g., 1200000"
                    value={income}
                    onChange={(e) => setIncome(e.target.value)}
                    data-testid="input-income"
                  />
                </div>

                <div>
                  <Label htmlFor="deductions">Deductions (₹)</Label>
                  <Input
                    id="deductions"
                    type="number"
                    placeholder="e.g., 150000"
                    value={deductions}
                    onChange={(e) => setDeductions(e.target.value)}
                    data-testid="input-deductions"
                  />
                  <p className="text-xs text-muted-foreground mt-1">
                    80C, 80D, HRA, etc. (for Old Regime)
                  </p>
                </div>
              </div>

              <Button
                onClick={calculateTax}
                className="w-full"
                size="lg"
                data-testid="button-calculate"
              >
                <Calculator className="mr-2 h-4 w-4" />
                Compare Both Tax Regimes
              </Button>

              {result && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-8 space-y-6"
                >
                  <div className="text-center">
                    <h3 className="font-semibold text-lg mb-2">Tax Comparison Results</h3>
                    <p className="text-sm text-muted-foreground">
                      Compare both regimes to choose the best option for your situation
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <Card className={`p-6 ${result.recommended === "old" ? "border-2 border-accent bg-accent/5" : "border"}`}>
                      <div className="flex items-center justify-between mb-4">
                        <h4 className="font-semibold">Old Regime</h4>
                        {result.recommended === "old" && (
                          <div className="flex items-center gap-1 text-accent text-xs font-semibold">
                            <CheckCircle2 className="h-4 w-4" />
                            Recommended
                          </div>
                        )}
                      </div>
                      <div className="text-3xl font-bold mb-2" data-testid="text-old-regime-tax">
                        ₹{result.oldRegime.toLocaleString("en-IN")}
                      </div>
                      <p className="text-sm text-muted-foreground">
                        With deductions (80C, 80D, HRA)
                      </p>
                    </Card>

                    <Card className={`p-6 ${result.recommended === "new" ? "border-2 border-accent bg-accent/5" : "border"}`}>
                      <div className="flex items-center justify-between mb-4">
                        <h4 className="font-semibold">New Regime</h4>
                        {result.recommended === "new" && (
                          <div className="flex items-center gap-1 text-accent text-xs font-semibold">
                            <CheckCircle2 className="h-4 w-4" />
                            Recommended
                          </div>
                        )}
                      </div>
                      <div className="text-3xl font-bold mb-2" data-testid="text-new-regime-tax">
                        ₹{result.newRegime.toLocaleString("en-IN")}
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Simplified, no deductions
                      </p>
                    </Card>
                  </div>

                  <div className="bg-primary/5 rounded-lg p-6 border border-primary/20">
                    <div className="flex items-start gap-3">
                      <TrendingDown className="h-6 w-6 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="font-semibold mb-1">
                          You save ₹{result.difference.toLocaleString("en-IN")} by choosing {result.recommended === "old" ? "Old" : "New"} Regime
                        </div>
                        <p className="text-sm text-muted-foreground mb-3">
                          The {result.recommended === "old" ? "old regime with deductions" : "new simplified regime"} is better for your income and deductions.
                        </p>
                        <div className="bg-green-600/10 dark:bg-green-400/10 rounded p-3 border border-green-600/20 dark:border-green-400/20">
                          <div className="text-sm font-semibold text-green-600 dark:text-green-400 mb-1">
                            💡 Additional Professional Savings
                          </div>
                          <p className="text-sm text-muted-foreground">
                            With expert tax planning and optimization, you could save an additional{" "}
                            <span className="font-bold text-green-600 dark:text-green-400">
                              ₹{result.professionalSavings.toLocaleString("en-IN")}
                            </span>{" "}
                            annually through strategic tax structuring.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <Button
                    variant="default"
                    className="w-full"
                    onClick={() => {
                      const element = document.getElementById("contact");
                      element?.scrollIntoView({ behavior: "smooth" });
                    }}
                    data-testid="button-get-expert-help"
                  >
                    Get Expert Help to Maximize Your Savings
                  </Button>
                </motion.div>
              )}
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
