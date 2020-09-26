import Appointment from '../infra/typeorm/entities/Appointment';
import ICreateAppointmentDTO from '../dtos/ICreateAppointmentDTO';
import IFindAllOnMonthDTO from '../dtos/IFindAllOnMonthDTO';
import IFindAllOnDayDTO from '../dtos/IFindAllOnDayDTO';

export default interface IAppointmentsRepository {
  create(data: ICreateAppointmentDTO): Promise<Appointment>;
  findByDate(date: Date): Promise<Appointment | undefined>;
  findAllOnMonth(data: IFindAllOnMonthDTO): Promise<Appointment[]>;
  findAllOnDay(data: IFindAllOnDayDTO): Promise<Appointment[]>;
}
