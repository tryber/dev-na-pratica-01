/* eslint-disable react/jsx-max-depth */
interface IPropsCard {
  fotoCapa: string;
  titulo: string;
  descricao: string;
  fotoUser: string;
  nome: string;
  stack: string;
  medalhas: string;
}

function Card({ fotoCapa, titulo, descricao, fotoUser, nome, stack, medalhas }: IPropsCard) {
  return (
    <div className="w-72 rounded-lg flex flex-col items-center bg-slate-900">
      <img className="py-4" src={ fotoCapa } alt="Ícone da medalha" />
      <div
        className="flex flex-col items-start gap-2 w-full
        rounded-b-lg bg-gray-50 text-black p-1 font-normal"
      >
        <h2 className="text-xl font-bold">{ titulo }</h2>
        <p className="text-sm">{ descricao }</p>
        <div className="flex gap-2">
          <img
            className="w-16 h-16 rounded-full"
            src={ fotoUser }
            alt="Ícone do usuário"
          />
          <div className="flex flex-col">
            <h3 className="text-base">{nome}</h3>
            <span className="text-xs">{stack}</span>
            <div className="flex gap-1">
              <span className="w-5 h-5">
                <img
                  src={ medalhas }
                  alt="Ícone da medalha"
                />
              </span>
              <span className="w-5 h-5">
                <img
                  src={ medalhas }
                  alt="Ícone da medalha"
                />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
