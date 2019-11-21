import { Profesional } from '../models/profesional'
import { ProfType } from '../models/profType'

const profesionals = [
    new Profesional('1', 'Jaime', '12345678A', ProfType.BECARIO),
    new Profesional('2', 'Jose', '12345678B', ProfType.FUNCIONARIO),
    new Profesional('3', 'Maikel', '12345678C', ProfType.INDEFINIDIO)
]

function profByIdResolver(root, args, context){
    let prof = profesionals.find(
        (p)=> p._id===args.id);
    return prof;
}

function profesionalsResolver(root, args, context){
    let profList = profesionals;
    return profList;
}

export const resolvers = {
    Query:{
        profById:(root, args, context) => profByIdResolver(root, args, context),
        profesionals:(root,args, context) => profesionalsResolver(root, args, context),

    },
    ProfType:{
        FUNCIONARIO:0,
        INDEFINIDIO:1,
        BECARIO:2
    }
}