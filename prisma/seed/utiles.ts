import { PrismaClient } from '@prisma/client';

export const prisma = new PrismaClient();

export const getRandomNumber = (max: number): number => {
  const number = Math.floor(Math.random() * max);
  return number;
};

export const getRandomBoolean = (): boolean => {
  return Math.random() < 0.5;
};

export const getRendomEnumValue = <T extends Record<string, string | number>>(
  enumType: T,
): T[keyof T] => {
  const values = Object.keys(enumType);
  const cleanValues = values.filter((val) => isNaN(Number(val)));
  const enumKey = values[Math.floor(Math.random() * cleanValues.length)];
  return cleanValues[enumKey] as T[keyof T];
};

export function generateSerialSwitch(): string {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let randomPart = '';

  for (let i = 0; i < 5; i++) {
    const randomIndex = Math.floor(Math.random() * chars.length);
    randomPart += chars[randomIndex];
  }

  return `LA-H-${randomPart}-EUR`;
}

export function generateSerialPS2(): string {
  const randomNumber = Math.floor(Math.random() * 100000) // 0 à 99999
    .toString()
    .padStart(5, '0'); // complète avec des 0 si nécessaire

  return `SLES-${randomNumber}`;
}
