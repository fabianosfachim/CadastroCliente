using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using XGEM.PortalCliente.Data.Interfaces;
using XGEM.PortalCliente.Data.Repositories;
using XGEM.PortalCliente.Domain.Entities;

namespace XGEM.PortalCliente.Data.Repositoriess.Entities
{
    public class LoginRepository : EntityBaseRepository<Login>, ILoginRepository

    {
        private readonly ApplicationContext _db;
        public LoginRepository(ApplicationContext context) : base(context)
        {
            _db = context;
        }
    }
}
