-- CreateTable
CREATE TABLE "_MovieToTheatre" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_MovieToTheatre_AB_unique" ON "_MovieToTheatre"("A", "B");

-- CreateIndex
CREATE INDEX "_MovieToTheatre_B_index" ON "_MovieToTheatre"("B");

-- AddForeignKey
ALTER TABLE "_MovieToTheatre" ADD CONSTRAINT "_MovieToTheatre_A_fkey" FOREIGN KEY ("A") REFERENCES "Movie"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_MovieToTheatre" ADD CONSTRAINT "_MovieToTheatre_B_fkey" FOREIGN KEY ("B") REFERENCES "Theatre"("id") ON DELETE CASCADE ON UPDATE CASCADE;
