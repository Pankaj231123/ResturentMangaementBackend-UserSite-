import { IsString, IsNotEmpty, IsOptional, IsEmail } from 'class-validator';

export class LoginDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;

  @IsString()
  @IsOptional()  // OTP is optional when validating login
  otp?: string;  // Add otp field to store the OTP entered by the user
}
