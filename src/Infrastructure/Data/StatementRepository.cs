using System.Linq;
using System.Threading.Tasks;
using Application.Entities;
using Application.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace Infrastructure.Data
{
    public class StatementRepository : EfRepository<Statement> , IStatementRepository
    {
        public StatementRepository(AppDbContext ctx) : base(ctx)
        {
        }

        public Task<Statement> GetByUserId(int userId)
        {
            return _ctx.Statements
                .Where(x => x.UserId == userId)
                .FirstOrDefaultAsync();
        }
    }
}