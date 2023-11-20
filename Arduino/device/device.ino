#include "MPU6050.h"

long long int detectionCurrentTime = 0;
long long int printResultTime = 0;
long long int sleepDetectionStep = 0;
long long int sleepCheckTime = 0;
int step = 0;

void setup(void) {
  Serial.begin(115200);
  mpu6050Setup();
}

void loop() {
  if (millis() - detectionCurrentTime > 20){
    detectionCurrentTime = millis();
    if (stepCountAlgorithm())
      step++;
  }
  if (millis() - printResultTime > 5000){
    printResultTime = millis();
    Serial.println(step);
  }
  if (millis() - sleepDetectionStep > 1000){
    sleepDetectionStep = millis();
    sleepDetection();
  }
  if (getSleepStatus()==0 && millis() - sleepCheckTime > 3600000){
    
    Serial.print("Total sleep time: ");
    Serial.println(getTotalSleepTime());
    Serial.print("Light sleep stage time: ");
    Serial.println(getLightSleepTotalTime());
    Serial.print("Deep sleep stage time: ");
    Serial.println(getDeepSleepTotalTime());
    sleepCheckTime = millis();
  }
}