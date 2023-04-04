/*
Este patrón es simple de entender, pero ahí esta el key del asunto, vamos a un nivel más allá.

Te sugiero los siguientes escenarios/casos a codear:

El ejemplo que propongo es hacer una clase que simule un reloj, es decir, que nos vaya dando la hora cada segundo 
(para hacerlo sencillo simplemente una aplicación de consola en la que imprimiremos la hora por pantalla cada segundo) 
y el reloj se va a crear usando el singleton porque no tiene sentido tener varias instancias distintas porque todas 
nos darían la misma hora y además al hacerlo como una aplicación de consola si creamos más de un objeto de la clase 
reloj se nos imprimiría cada hora tantas veces como instancias de la clase reloj hubiésemos creado previamente.

Terminado el punto 1, que te parece si le añadimos complejidad o optimizamos la concurrencia por más de un thread. https://stackoverflow.com/questions/12316406/thread-safe-c-sharp-singleton-pattern

Ahora, que ya haz terminado ejercicios de Singleton pattern. Viene la pregunta: ¿Porqué deberiamos usar Singleton pattern si podemos usar statics?. Si nos enfocamos en JS, finalmente todo es functions, prototypes, etc. Como respondemos esta incognita?

Si te alcanza el tiempo, que te parece si le hacemos un unit testing con JEST?

Trabaja estos puntos, y los vamos viendo. Tu puedes.

*/

class Clock {
  private static instance: Clock;

  private readonly hours: number;
  private readonly minutes: number;
  private readonly seconds: number;

  private constructor(
    hours: number,
    minutes: number,
    seconds: number /* Aquí incluso, podríamos inyectar el TimeFormatBuilder */
  ) {
    Guard(hours, minutes, seconds);

    this.hours = hours;
    this.minutes = minutes;
    this.seconds = seconds;
  }

  public static getClock(): Readonly<Clock> {
    if (!Clock.instance) {
      const date = new Date();

      Clock.instance = new Clock(
        date.getHours(),
        date.getMinutes(),
        date.getSeconds()
      );
    }

    return Object.freeze(Clock.instance);
  }

  public printTime(): string {
    return TimeFormatBuilder({
      hours: this.hours,
      minutes: this.minutes,
      seconds: this.seconds
    } as TimeProps);
  }
}

type TimeProps = {
  hours: number;
  minutes: number;
  seconds: number;
  format: string;
};

const TimeFormatBuilder = (time: TimeProps): string => {
  const { hours, minutes, seconds } = time;

  return `${hours}:${minutes}:${seconds}`;
};

const Run = (): void => {
  console.log(Clock.getClock().printTime());
};

const Guard = (hours: number, minutes: number, seconds: number): void => {
  if (!isNaN(hours) || !isNaN(minutes) || !isNaN(seconds))
    throw new Error('Parameters are invalid!');
};

export const RunClient = () => {
  setTimeout(() => {
    Run();
  }, 1000);
};
