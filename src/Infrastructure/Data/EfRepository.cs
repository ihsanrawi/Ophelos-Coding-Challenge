using System.Collections.Generic;
using System.Threading.Tasks;
using Application.Entities;
using Application.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace Infrastructure.Data
{
    public class EfRepository<T> : IAsyncRepository<T> where T : BaseEntity
    {
        protected readonly AppDbContext _ctx;

        public EfRepository(AppDbContext ctx)
        {
            _ctx = ctx;
        }

        public virtual async Task<T> GetByIdAsync(int id)
        {
            var keyValues = new object[] { id };
            return await _ctx.Set<T>().FindAsync(keyValues);
        }

        public async Task<IReadOnlyList<T>> ListAllAsync()
        {
            return await _ctx.Set<T>().ToListAsync();
        }

        public async Task<T> AddAsync(T entity)
        {
            await _ctx.Set<T>().AddAsync(entity);
            await _ctx.SaveChangesAsync();

            return entity;
        }

        public async Task UpdateAsync(T entity)
        {
            _ctx.Entry(entity).State = EntityState.Modified;
            await _ctx.SaveChangesAsync();
        }

        public async Task DeleteAsync(T entity)
        {
            _ctx.Set<T>().Remove(entity);
            await _ctx.SaveChangesAsync();
        }
    }
}